# Dockerfile
# You must specify POSTGRES_PASSWORD to a non-empty value for the
# superuser. For example, "-e POSTGRES_PASSWORD=password" on "docker run".

# You may also use "POSTGRES_HOST_AUTH_METHOD=trust" to allow all
# connections without a password. This is *not* recommended.

# See PostgreSQL documentation about "trust":
# https://www.postgresql.org/docs/current/auth-trust.html

FROM postgres:latest
ENV POSTGRES_DB adidas_related_info
ENV POSTGRES_HOST_AUTH_METHOD trust
COPY sdc-psqlSchema.sql /docker-entrypoint-initdb.d/
