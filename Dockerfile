FROM ghcr.io/quirrel-dev/quirrel:main

ENV DISABLE_TELEMETRY true
ENV ENABLE_SSRF_PREVENTION true

ARG PORT
ENV PORT ${PORT}

FROM node:18
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ['npm', 'run']
EXPOSE 3000
ENV PORT 3000