FROM ubuntu:latest
RUN apt-get update
RUN apt-get install -y python3
RUN apt-get install -y python3-pip
WORKDIR /app
COPY /front-end/build front-end/build/
COPY /back-end/ back-end/
COPY requirements.txt .
RUN python3 -m pip install -U pip
RUN pip install wheel setuptools pip --upgrade
RUN pip install --upgrade setuptools
RUN pip install -r requirements.txt

EXPOSE 80

CMD ["python3", "./back-end/main.py"]