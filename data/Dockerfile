# Dockerfile

FROM postgres:latest
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB adidas_related_info
COPY sdc-psqlSchema.sql /docker-entrypoint-initdb.d/