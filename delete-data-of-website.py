import pandas as pd

# Load the CSV data into a pandas DataFrame
csv_file = 'C://Users//91991//Desktop//IIA-Project-Copy//merged.csv'  # Replace with your CSV file path
df = pd.read_csv(csv_file)

# Define the website name to filter by
website_to_delete = 'eBay'  # Replace with the website name you want to delete

# Create a new DataFrame with entries not matching the website name
filtered_df = df[df['website it is available at'] != website_to_delete]

# Save the filtered data back to the CSV file
filtered_df.to_csv(csv_file, index=False)

print(f"Entries with website '{website_to_delete}' have been deleted.")
