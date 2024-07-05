# Vue Kip Text

`vue-kip-text` is a Vue 3 component library for converting numbers to Lao Kip text representation.

ເປັນ Package ສຳລັບແປງໂຕເລກ ເປັນຕົວໜັງສືຈຳນວນເງິນ ທີ່ເປັນພາສາລາວ

ພັດທະນາໂດຍ: SornDev

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [License](#license)

## Installation (ວິທີການຕິດຕັ້ງ)

Install the package via npm:

```bash
npm install vue-kip-text
```

## Usage (ວິທີການລົງທະບຽນນຳໃຊ້ໃນ VueJS)
First, import the vue-kip-text component into your Vue application:

```bash
import { createApp } from 'vue';
import App from './App.vue';
import KipText from 'vue-kip-text';

const app = createApp(App);

app.component('KipText', KipText);

app.mount('#app');
```

Then, use the KipText component in your Vue template: (ສາມາດດຶງມາໃຊ້ໄດ້ແບບນີ້)

```bash
<template>
  <div>
    <KipText :number="Test" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      Test: 123456789
    };
  }
};
</script>
```

## API 

Props
number (Number, required): The number to be converted to Lao Kip text.

## license
This project is licensed under the MIT License. See the LICENSE file for details.
