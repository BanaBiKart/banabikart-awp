# BanaBiKart API Wrapper
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/banabikart/banabikart-awp)
![GitHub](https://img.shields.io/github/license/banabikart/banabikart-awp)
![GitHub top language](https://img.shields.io/github/languages/top/banabikart/banabikart-awp)
![CodeFactor Grade](https://img.shields.io/codefactor/grade/github/banabikart/banabikart-awp)
![GitHub issues](https://img.shields.io/github/issues/banabikart/banabikart-awp)

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


#### RESELLER

//Fetch orders
const orders: Orders = await banabikart.orders();
```
