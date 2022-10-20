# BanaBiKart API Wrapper

[![CircleCI](https://circleci.com/gh/BanaBiKart/banabikart-awp.svg?style=svg)](https://circleci.com/gh/BanaBiKart/banabikart-awp)
[![Coverage Status](https://coveralls.io/repos/github/BanaBiKart/banabikart-awp/badge.svg?branch=master)](https://coveralls.io/github/BanaBiKart/banabikart-awp?branch=master)
[![Build Status](https://travis-ci.org/BanaBiKart/banabikart-awp.svg?branch=master)](https://travis-ci.org/BanaBiKart/banabikart-awp)
[![CodeFactor](https://www.codefactor.io/repository/github/BanaBiKart/banabikart-awp/badge)](https://www.codefactor.io/repository/github/BanaBiKart/banabikart-awp)

BanaBiKart node bindings

This was initially planned to be a simple utility for us to use to manage orders on BanaBiKart end.

### Installation

```bash
$ npm install banabikart-awp
```

Set the following environment variables
 - BANABIKART_API_KEY

### Usage

#### import
``` javascript
import { BanaBiKart } from "banabikart-awp";
...
const banabikart = new BanaBiKart();

```

``` javascript
#### CUSTOMER 

//Fetch order by id
const order: Order[] = await banabikart.order.get("order id");
``

#### RESELLER

//Fetch orders
``` javascript
const orders: Orders = await banabikart.orders();
```
