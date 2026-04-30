#!/bin/sh
set -e
if [ "${SKIP_PRISMA_MIGRATE:-}" != "1" ]; then
  npx prisma migrate deploy
fi
exec "$@"
