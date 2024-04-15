# Parrot API 0.1.0 documentation


## Table of Contents

* [Servers](#servers)
  * [development](#development-server)

## Servers

### `development` Server

* URL: `ws://0.0.0.0:3000/`
* Protocol: `ws`



## Operations

### RECEIVE `/squawk` Operation

* Operation ID: `onSquawkRequest`

#### Message `SquawkRequest`

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | object | - | - | - | **additional properties are NOT allowed** |
| message | string | The message you want the Parrot to squawk. | - | - | - |
| repeat | integer | The times you want the Parrot to squawk the message. | - | >= 1 | - |

> Examples of payload _(generated)_

```json
{
  "message": "string",
  "repeat": 1
}
```



### SEND `/squawk` Operation

* Operation ID: `sendSquawkResponse`

#### Message `SquawkResponse`

##### Payload

| Name | Type | Description | Value | Constraints | Notes |
|---|---|---|---|---|---|
| (root) | string | The message the Parrot will squawk. | - | - | - |

> Examples of payload _(generated)_

```json
"string"
```



