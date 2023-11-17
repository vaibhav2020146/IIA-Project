import csv
import random
from faker import Faker

# Initialize Faker for generating product data
fake = Faker()

# Define the number of total items to generate for each category
num_items_per_category = 5  # Adjust as needed

# Create a list of e-commerce websites
websites = [
    "Amazon",
    "eBay",
    "Walmart",
    "Best Buy",
    "Target",
    "Newegg",
]

# Create a dictionary to store product data by website
products_by_website = {website: [] for website in websites}

# Define product names for each category
grocery_product_names = [
    "Milk",
    "Bread",
    "Eggs",
    "Cereal",
    "Fresh Vegetables",
    "Fresh Fruits",
    "Rice",
    "Pasta",
    "Canned Soup",
    "Canned Vegetables",
    "Canned Fruits",
    "Frozen Pizza",
    "Snack Bars",
    "Coffee",
    "Tea",
]

clothing_product_names = [
    "T-Shirt",
    "Jeans",
    "Dress Shirt",
    "Sweater",
    "Socks",
    "Sneakers",
    "Dress",
    "Skirt",
    "Jacket",
    "Hoodie",
]

electronics_product_names = [
    "Laptop",
    "Smartphone",
    "Tablet",
    "Headphones",
    "TV",
    "Camera",
    "Smartwatch",
    "Bluetooth Speaker",
]

# Initialize a unique product ID counter
product_id_counter = 1

# Generate and store simulated product data for each website and category
for website in websites:
    for product_id in range(product_id_counter, product_id_counter + num_items_per_category):
        # Randomly select a product category
        category = random.choice(["Grocery", "Clothing", "Electronics"])

        # Choose product names based on the category
        if category == "Grocery":
            product_name = random.choice(grocery_product_names)
        elif category == "Clothing":
            product_name = random.choice(clothing_product_names)
        else:  # Electronics
            product_name = random.choice(electronics_product_names)

        # Generate fake data for the product fields
        description = fake.text(max_nb_chars=200)
        rating = round(random.uniform(1, 5), 1)
        price = round(random.uniform(10, 1000), 2)
        currency = "INR"
        image_url = fake.image_url(width=300, height=300)
        specs = [
            {"spec_name": "Color", "spec_value": fake.color_name()},
            {"spec_name": "Size", "spec_value": fake.random_element(elements=("S", "M", "L", "XL"))},
        ]

        product_url = f"https://www.{website.replace(' ', '').lower()}.com/product/{product_id}"

        product = {
            "id": product_id,
            "title": product_name,
            "website it is available at": website,
            "description": description,
            "rating": rating,
            "price": price,
            "currency": currency,
            "imageURL": image_url,
            "specs": specs,
        }

        products_by_website[website].append(product)

    # Increment the product ID counter for the next category
    product_id_counter += num_items_per_category

# Write the product data to a CSV file
with open("product_data.csv", mode="w", newline="") as file:
    fieldnames = ["id", "title", "website it is available at", "description", "rating", "price", "currency", "imageURL", "specs"]
    writer = csv.DictWriter(file, fieldnames=fieldnames)

    writer.writeheader()

    for website, products in products_by_website.items():
        writer.writerows(products)

print(f"Generated product data and saved it to 'product_data.csv'.")
