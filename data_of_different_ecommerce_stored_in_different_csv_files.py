import csv
import random
from faker import Faker

# Initialize Faker for generating product data
fake = Faker()

# Define the number of total items to generate for each category
num_items_per_category = 50  # Adjust as needed

# Create a list of e-commerce websites
websites = [
    "Amazon",
    "eBay",
    "Walmart",
    "Best Buy",
    "Target",
    "Newegg",
]

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

#defining a map for linking product with their respective images:
product_image_map = {
    "Milk": "https://m.media-amazon.com/images/I/61mbT2S-adL._AC_UL480_FMwebp_QL65_.jpg",
    "Bread": "https://m.media-amazon.com/images/I/815XdY--ZDL._AC_UL480_FMwebp_QL65_.jpg",
    "Eggs": "https://m.media-amazon.com/images/I/713F8edohML._AC_UL480_FMwebp_QL65_.jpg",
    "Cereal": "https://m.media-amazon.com/images/I/71y2ybKOoxL._SX679_.jpg",
    "Fresh Vegetables": "https://m.media-amazon.com/images/I/619D1OTIYnL._AC_UL480_FMwebp_QL65_.jpg",
    "Fresh Fruits": "https://m.media-amazon.com/images/I/51ebZJ+DR4L._AC_UL480_FMwebp_QL65_.jpg",
    "Rice": "https://m.media-amazon.com/images/I/81OeQQruz1L._AC_UL480_FMwebp_QL65_.jpg",
    "Pasta": "https://m.media-amazon.com/images/I/61lF1cVyt2S._AC_UL480_FMwebp_QL65_.jpg",
    "Canned Soup": "https://m.media-amazon.com/images/I/61lOAPbcf1L._AC_UL480_FMwebp_QL65_.jpg",
    "Canned Vegetables": "https://m.media-amazon.com/images/I/81LX0lM7DzL._AC_UL480_FMwebp_QL65_.jpg",
    "Canned Fruits": "https://m.media-amazon.com/images/I/41adxzhFYeL._AC_UL480_FMwebp_QL65_.jpg",
    "Frozen Pizza": "https://m.media-amazon.com/images/I/51MFWhH4HsL._AC_UL480_FMwebp_QL65_.jpg",
    "Snack Bars": "https://m.media-amazon.com/images/I/71I99g4QRzL._AC_UL480_FMwebp_QL65_.jpg",
    "Coffee": "https://m.media-amazon.com/images/I/81HagC9uIPL._AC_UL480_FMwebp_QL65_.jpg",
    "Tea": "https://m.media-amazon.com/images/I/51QF8woKr5S._AC_UL480_FMwebp_QL65_.jpg",
    "T-Shirt": "https://m.media-amazon.com/images/I/71y4BXxLJHL._AC_UL480_FMwebp_QL65_.jpg",
    "Jeans": "https://m.media-amazon.com/images/I/51MKCIeyRVL._AC_UL480_FMwebp_QL65_.jpg",
    "Dress Shirt": "https://m.media-amazon.com/images/I/51-EikstxnL._AC_UL480_FMwebp_QL65_.jpg",
    "Sweater": "https://m.media-amazon.com/images/I/31YtGQVKCsL._AC_UL480_FMwebp_QL65_.jpg",
    "Socks": "https://m.media-amazon.com/images/I/81dBZYxudhL._AC_UL480_FMwebp_QL65_.jpg",
    "Sneakers": "https://m.media-amazon.com/images/I/61gC7MDnPxL._AC_UL480_FMwebp_QL65_.jpg",
    "Dress": "https://m.media-amazon.com/images/I/41fD1yX-ByL._AC_UL480_FMwebp_QL65_.jpg",
    "Skirt": "https://m.media-amazon.com/images/I/41Srjmt2O8L._AC_UL480_FMwebp_QL65_.jpg",
    "Jacket": "https://m.media-amazon.com/images/I/51e3g46PdjL._AC_UL480_FMwebp_QL65_.jpg",
    "Hoodie": "https://m.media-amazon.com/images/I/51Hz7KZL2TL._AC_UL480_FMwebp_QL65_.jpg",
    "Laptop": "https://m.media-amazon.com/images/I/71I5fx8iPJL._AC_UY327_FMwebp_QL65_.jpg",
    "Smartphone": "https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY327_FMwebp_QL65_.jpg",
    "Tablet": "https://m.media-amazon.com/images/I/61vsK7h3zVL._AC_UY327_FMwebp_QL65_.jpg",
    "Headphones": "https://m.media-amazon.com/images/I/61QUY1oXChS._AC_UY327_FMwebp_QL65_.jpg",
    "TV": "https://m.media-amazon.com/images/I/619--Jabh2L._AC_UY327_FMwebp_QL65_.jpg",
    "Camera": "https://m.media-amazon.com/images/I/61VwXeITFjL._AC_UY327_FMwebp_QL65_.jpg",
    "Smartwatch": "https://m.media-amazon.com/images/I/61SSVxTSs3L._AC_UY327_FMwebp_QL65_.jpg",
    "Bluetooth Speaker": "https://m.media-amazon.com/images/I/61K8FS335JL._AC_UY327_FMwebp_QL65_.jpg"
}

# Initialize a unique product ID counter
product_id_counter = 1

# Generate and store simulated product data for each website and category
for website in websites:
    # Create a separate CSV file for each website
    dicti = {} #to ensure same product is not repeated within same website
    csv_file_name = f"{website.lower()}_products.csv"
    with open(csv_file_name, mode="w", newline="") as file:
        fieldnames = ["id", "title", "website it is available at", "description", "rating", "price", "currency", "imageURL", "quantitys","specs"]
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader()

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
            quantitys = random.randint(4,10)
            specs = [
                {"spec_name": "Color", "spec_value": fake.color_name()},
                {"spec_name": "Size", "spec_value": fake.random_element(elements=("S", "M", "L", "XL"))},
            ]

            product = {
                "id": product_id,
                "title": product_name,
                "website it is available at": website,
                "description": description,
                "rating": rating,
                "price": price,
                "currency": currency,
                "imageURL": product_image_map[product_name],
                "quantitys": random.randint(4,10), 
                "specs": specs,
            }
            if product_name in dicti:
                continue
            else:
                dicti[product_name] = 1
            writer.writerow(product)

    # Increment the product ID counter for the next category
    product_id_counter += num_items_per_category

print(f"Generated product data and saved it to individual CSV files for each website.")
