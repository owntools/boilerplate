FROM python:3.7.5-slim
WORKDIR /usr/src/app
ENV APP_HOME /usr/src/app

# install OS packages here. for example, to compile psycopg2:
# RUN apt-get update && apt-get install -y libpq-dev gcc

# use poetry to install things
# e.g. `poetry add Flask` instead of `pip install Flask`
RUN pip install poetry

# tell poetry to not create virtualenvironments
RUN poetry config virtualenvs.create false

RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

COPY pyproject.toml .
COPY poetry.lock .
RUN poetry install

COPY . .

CMD ["python", "app.py"]
