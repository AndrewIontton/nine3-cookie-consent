# :cookie: nine3-cookie-consent

A small, simple and customizable cookie consent bar for use in React applications.

## Installation

``` shell
npm install nine3-cookie-consent
```


## Using it

You can import the cookie bar like this:

``` js
import CookieConsent from "nine3-cookie-consent";
```

If you want to set/remove cookies yourself you can optionally import `Cookies` (straight from js-cookie) like this:

``` js
import CookieConsent, { Cookies } from "react-cookie-consent";
```

Then you can use the component anywhere in your React app like so:

```jsx
<CookieConsent>
    This website uses cookies to enhance the user experience.
</CookieConsent>
```

You can optionally set some props like this (next chapter will show all props):

```js
<CookieConsent
    buttonText="Sure man!!"
    expires={150}
>
    This website uses cookies to enhance the user experience.
</CookieConsent>
```

One of the props (onAccept) is a function, this function will be called after the user has clicked the accept button. You can provide a function like so:

```js
<CookieConsent
    onAccept={() => {alert("yay!")}}
>

</CookieConsent>
```


## Debugging it

Because the cookie consent bar will be hidden once accepted, you will have to set the prop `debug={true}` to evaluate styling changes:

```js
<CookieConsent
    debug={true}
>
</CookieConsent>
```

**Note:** Dont forget to remove the `debug`-property for production.
