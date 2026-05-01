#!/bin/sh
set -e
if [ "${SKIP_PRISMA_MIGRATE:-}" != "1" ]; then
  npx prisma migrate deploy
fi
if [ "${SKIP_PRISMA_SEED:-}" != "1" ]; then
  npx prisma db seed
fi
exec "$@"
