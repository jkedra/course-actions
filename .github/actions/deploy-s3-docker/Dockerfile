FROM python:3

RUN pip install --no-cache-dir -r .github/actions/deploy-s3-docker/requirements.txt

CMD ["python", ".github/actions/deploy-s3-docker/deployment.py"]