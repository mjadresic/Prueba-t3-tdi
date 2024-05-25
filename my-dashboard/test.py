from google.cloud import storage


def list_blobs(bucket_name: str):
    """Downloads a blob from the bucket."""

    storage_client = storage.Client.from_service_account_json('./taller-integracion-310700-41f361102b8b.json')
    blobs = storage_client.list_blobs(bucket_name)
    for blob in blobs:
        print(f"Downloading blob: {blob.name}...")
        print(blob.download_as_string())
        input("Press Enter to continue...")


if __name__ == '__main__':
    list_blobs('2024-1-tarea-3')
