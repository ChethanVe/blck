from werkzeug.utils import secure_filename
import boto3,botocore,os,uuid


s3 = boto3.client(
    "s3",
    aws_access_key_id=os.getenv('AWS_ACCESS_KEY'),
    aws_secret_access_key=os.getenv('AWS_SECRET_ACCESS_KEY')
)


def upload_file_to_s3(file, folder_name, acl="public-read"):
    filename = secure_filename(file.filename)
    unique_filename = str(uuid.uuid4())

    try:
        if(folder_name==''):
            s3.upload_fileobj(
                file,
                os.getenv("AWS_BUCKET_NAME"),
                'car_fleet_slider/'+file.filename,
                ExtraArgs={
                    "ACL": acl,
                    "ContentType": file.content_type
                }
            )
        else:
            print(folder_name)
            s3.upload_fileobj(
                file,
                os.getenv("AWS_BUCKET_NAME"),
                folder_name+'/'+file.filename,
                ExtraArgs={
                    "ACL": acl,
                    "ContentType": file.content_type
                }
            )
            print(file.filename)

    except Exception as e:
        # This is a catch all exception, edit this part to fit your needs.
        print("Something Happened: ", e)
        return e

    # after upload file to s3 bucket, return filename of the uploaded file
    return folder_name+'/'+file.filename
