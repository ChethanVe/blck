FROM python:3.9.7
EXPOSE 5001
COPY ./requirements.txt /tmp
WORKDIR /tmp
RUN pip install -r requirements.txt
RUN apt-get update && apt-get install gunicorn -y
COPY . /app
WORKDIR /app
CMD gunicorn server:app -b 0.0.0.0:5001
