# https://hub.docker.com/r/microsoft/devcontainers-python
FROM mcr.microsoft.com/devcontainers/python:1.1-3.12-bookworm

# Install unattended-upgrades and configure for hourly security-only updates
# https://askubuntu.com/a/412
RUN apt-get update &&\
    apt-get -y install --no-install-recommends unattended-upgrades cron
RUN sed -i '/origin=Debian,codename=${distro_codename},label=Debian\"/s/^/\/\//' /etc/apt/apt.conf.d/50unattended-upgrades

# Create update cron job. May also be set by apt-daily.timer, needs investigation https://askubuntu.com/a/1340016
RUN echo "15 * * * * unattended-upgrade" | crontab -

# Apply security updates
RUN unattended-upgrade -v

# Install poetry and plugins
RUN pipx install poetry
RUN pipx inject poetry poetry-audit-plugin poetry-plugin-up