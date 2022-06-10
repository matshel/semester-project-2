# Semester Project 2

![image](https://github.com/matshel/semester-project-2/blob/main/images/semester-project-2.PNG)

## Description

A e-commerce website that has both customer-facing and admin sections. Both sections are responsive and the website will be populated by a Strapi API supplied by Noroff.

- A frontend with home, product list, product detail and cart pages.
- Admin pages to create, update and delete products.
- The website is responsive on all devices.
- A checkout and payment system is not a part of the project.

## Customer-facing pages

### Home page:

- A hero banner with an image that is uploaded to Strapi.
- A list of featured products. (Featured collection type on Strapi)
- A list of all products added to Strapi. Each product display its title, price and image. The product links to its products detail page.
- A search text box. When searching (filtering), only the products that include the searched text in their title or description are listed.

### Product details page:

- Title
- Description
- Image
- Price
- An add to cart button. This will toggle the product in and out of a cart array stored in local storage.

### Cart/Basket page:

The cart/basket page displays a list of all products added to the cart. The items that have been added to local storage displays on the page. If the cart is empty a display message indicating this wil show.

- Title
- Price
- A link to the product view page
- Image

After the list of products, the total price of all the products in the cart will be displayed.
Note: the cart page is not a checkout page. No payments or user details are required to be taken.

## Admin section

The admin section (apart from the log in form) is only accessible to logged in admin users and includes the following features.

- Login/Logout
- Create an admin login form that allows administrator users to login. Use local storage to keep the user logged in.
- When logged in, display a logout button in the layout that logs the user out. Logging out does not clear the cart.
- Add/edit products
- Create form(s) that allow products to be added and edited. The form must allow the user to toggle whether a product is featured.
- Product images
- Input that allows a URL to be entered. This allows an image from an external URL to be used as the product image.
- Delete existing product. But not before the user confirms with a dialog box.

## Built With

You can list a the tech stack that you've used over here

- HTML
- Sass
- Javascript (modules)

## Getting Started

### Installing

1. Clone the repo:

```bash
git clone git@github.com:NoroffFEU/portfolio-1-example.git
```

2. Install the dependencies:

```
npm install
```

### Running

Here is where you detail how to run the app. It typically involves the commands you'd need to run to start the project e.g.

To run the app, run the following commands:

```bash
npm run start
```

## Contact

mats.helgesen@protonmail.com
