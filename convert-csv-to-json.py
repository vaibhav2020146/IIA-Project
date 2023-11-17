import csv
import json

# Function to read data from a CSV file and transform it
def transform_csv_to_json(input_csv_path, output_json_path):
    products = []

    with open(input_csv_path, mode='r', newline='') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for row in csv_reader:
            product_title = f"({row['website it is available at']}) {row['title']}"
            product = {
                "id": int(row["id"]),
                "title": product_title,  # Merge website into the title
                "description": row["description"],
                "rating": row["rating"],
                "price": float(row["price"]),
                "currency": row["currency"],
                "imageUrl": row["imageURL"],
                "quantitys": row["quantitys"],
                "specs": [row["specs"]],
            }
            products.append(product)

    # Save the data in JSON format
    with open(output_json_path, mode='w', encoding='utf-8') as json_file:
        json.dump(products, json_file, indent=2)

# Specify the paths for the input CSV file and output JSON file
input_csv_path = 'C://Users//91991//Desktop//IIA-Project-Copy//merged.csv'  # Replace with your CSV file path
output_json_path = 'C://Users//91991//Desktop//IIA-Project-Copy//output.json'  # Specify the output JSON file path

# Call the function to transform the data and save it in JSON format
transform_csv_to_json(input_csv_path, output_json_path)

print(f'Data transformed and saved in {output_json_path}')
