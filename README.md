
## Clone the repository

Clone the github repository

```bash
git clone https://github.com/your-username bni-e-commerce.git
cd bni-e-commerce
```
## Installation

Install with npm

```bash
  npm install
```    
## Setup Database
1. Ensure PostgreSQL is installed and running.
2. Create the required databases:

```bash
CREATE DATABASE bni_ecommerce_dev;
CREATE DATABASE bni_ecommerce_test;
CREATE DATABASE bni_ecommerce_prod;
```
3. Update the config.json file with your PostgreSQL credentials:
```json
{
  "development": {
    "username": "your_postgres_username",
    "password": "your_postgres_password",
    "database": "bni_ecommerce_dev",
    "host": "127.0.0.1",
    "port": 5432,
    "dialect": "postgres"
  }
}
```
4. Run Migration
```bash
npx sequelize-cli db:migrate
```
5. Seed Database
```bash
npx sequelize-cli db:seed:all
```
