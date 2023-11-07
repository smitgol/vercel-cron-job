FROM ghcr.io/quirrel-dev/quirrel:main

ENV DISABLE_TELEMETRY true
ENV ENABLE_SSRF_PREVENTION true

ARG PORT
ENV PORT ${PORT}

FROM node:18-alpine AS base
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

COPY --from=builder /app/public ./public
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
