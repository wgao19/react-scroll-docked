# react-scroll-docked

## Setup

```
$ npm i react-scroll-docked
```

## Use

```
import React from 'react';
import docked from 'react-scroll-docked';

const Navbar = () => <div>Example Navbar</div>;
const DockedNavbar = docked(Navbar);

// the docked one will appear when the page scrolls past 300px
const Example = () => <div>
  <Navbar />
  <DockedNavbar top={300} />
</div>
```
