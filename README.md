# TODO APP

## Guide

- After running the `docker-compose up`
  UI(Frontend) port : 3000
  Service(Backend) port : 5000
  DB port : 5432

- After that, `postresql` directory will be created for persist
- Default db user and password is `postgres:postgres` (For connecting from the terminal). And default db name is `xsolisdb`
- For unit testing, please make sure you are running the `db` and `service` instance. And please go into the `ui` directory run `yarn test`. There will be 4 test cases: `create`, `read`, `update`, `delete`
