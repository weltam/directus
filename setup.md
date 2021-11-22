curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

nvm install 16

git checkout -b scifin-brain

npm install

npm run build

cp api/example.env api/.env

npm run cli bootstrap

you can enable alter column type general support by running

```sql
SET enable_experimental_alter_column_type_general = true;
```