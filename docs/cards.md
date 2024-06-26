1. ### A simple card with background image and text over it with zoom effect on hover

```html
<div class="group relative max-w-xs overflow-hidden rounded-2xl shadow-lg m-4">
  <img
    src="https://picsum.photos/411"
    alt="image "
    class="transition-transform duration-200 group-hover:scale-110"
  />
  <div
    class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent"
  >
    <div class="p-4 text-white">
      <p class="mb-2 text-xl font-bold">Title</p>
      <p class="">
        Le tempore quia. Excepturi distinctio repellat reprehenderit voluptas,
        nostrum voluptatum ea?
      </p>
    </div>
  </div>
</div>
```

1. image reference :![alt text](image.png)

2. ### Card with discount % at top , zoom(scale effect) on hover linear gradient from left to right

```html
<div class="group relative max-w-xs overflow-hidden rounded-2xl shadow-lg m-4">
  <img
    src="https://picsum.photos/400"
    alt="image"
    class="transition-transform duration-200 group-hover:scale-110"
  />
  <div
    class="w-16 h-14 bg-black absolute right-10 top-0 rounded-b-xl flex items-center justify-center"
  >
    <p class="text-white text-lg">-40%</p>
  </div>
  <div
    class="absolute inset-0 flex items-end bg-gradient-to-r from-black/60 to-transparent"
  >
    <div class="p-4 text-white m-5">
      <p class="text-sm text-orange-400">Restaurant</p>
      <p class="mb-2 text-lg font-bold">Chef Burger London</p>
    </div>
  </div>
</div>
```

2. Image reference : ![alt text](image-1.png)

3. ### card with image and text below the image

```html
<div class="group m-4 w-40 overflow-hidden rounded-xl bg-gray-200">
  <img
    src="https://picsum.photos/200"
    alt=""
    class="transition-transform duration-200 group-hover:scale-105"
  />
  <div class="mb-2 ml-2">
    <p class="text-sm">Burgers and Fastfood</p>
    <p class="text-xs text-orange-400">21 resturants</p>
  </div>
</div>
```

3. Image reference :![alt text](image-2.png)

4. ### card with background image , gradient , zoom , texts and button

```html
<div
  class="group relative m-3 h-[300px] max-w-md overflow-hidden rounded-xl bg-red-200"
>
  <div class="absolute left-16 rounded-b-xl bg-white px-3 py-2 z-10">
    <p class="text-sm font-medium">Earn more with lower Fee</p>
  </div>
  <img
    src="https://picsum.photos/300"
    alt=""
    class="h-full w-full object-cover duration-200 group-hover:scale-110"
  />
  <div
    class="absolute inset-0 flex items-end bg-gradient-to-tr from-black to-transparent"
  >
    <div class="m-5  p-4">
      <p class="text-sm text-orange-400">Signup as a Business</p>
      <p class="mb-2 text-3xl font-bold text-white">Partner With US</p>
      <button class="rounded-2xl bg-orange-500 px-5 py-2 text-white font-bold ">
        Get Started
      </button>
    </div>
  </div>
</div>
```

4. Image refrence :![alt text](image-3.png)

5. ### card with discounts and more

```html
<div
  class="relative bg-white max-w-xs h-64 border shadow-sm rounded-xl m-4 overflow-hidden"
>
  <div>
    <span
      class="bg-orange-600 text-white px-5 mx-5 rounded-md text-sm absolute top-4"
      >40% discount
    </span>
  </div>

  <div>
    <span
      class="bg-orange-600 text-white px-2 mx-5 rounded-md text-sm absolute right-4 top-4"
      >0
    </span>
  </div>
  <img
    src="https://picsum.photos/200"
    alt=""
    class="h-[180px] w-full object-cover "
  />
  <div class=" ml-2  flex justify-between text-slate-500 ">
    <p class="text-sm  ">Burgers and Fastfood</p>
    <p class="text-xs   mr-5">4* (500)</p>
  </div>
  <span class=" mx-2 text-xs text-slate-400 ">5 $</span>

  <div class="text-xs text-slate-500 flex items-center mx-2 ">
    <span class="">30 min </span>
    <span class="mx-3">free </span>
    <span class="mx-3">delivery</span>
  </div>
</div>
```

5. Image reference : ![alt text](image-4.png)

6. ### basic cusines Cards

```html
<div class="m-4 w-28 overflow-hidden rounded-3xl">
  <img
    src="https://picsum.photos/100"
    alt=""
    class="h-auto w-full object-contain"
  />
  <div class="text-center">
    <p>Italian</p>
  </div>
</div>
```

6. Image reference :![alt text](image-5.png)
