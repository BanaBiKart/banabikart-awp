# BanaBiKart API Wrapper

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
