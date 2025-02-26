import json

# ฟังก์ชันสำหรับอ่าน JSON จากไฟล์
def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)  # ใช้ json.load() สำหรับอ่านข้อมูลจากไฟล์
    return data

# ฟังก์ชันสำหรับเขียน JSON ไปยังไฟล์
def write_json(file_path, data):
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)  # ใช้ json.dump() สำหรับเขียนข้อมูลลงในไฟล์

# ฟังก์ชันสำหรับแปลง JSON string เป็น Python dictionary
def test_json_string_operations():
    json_string = '{"name": "Alice", "age": 25, "city": "Los Angeles"}'
    data = json.loads(json_string)  # แปลง JSON string เป็น dictionary
    print("JSON to dict:", data)

    json_string_back = json.dumps(data, ensure_ascii=False, indent=4)  # แปลง dict กลับเป็น JSON string
    print("Dict to JSON string:", json_string_back)

# ทดสอบการอ่านไฟล์ JSON
print("Reading data from file:")
file_path = 'SetJSON_Data/data.json'  # ระบุ path ของไฟล์ JSON ที่คุณต้องการอ่าน
data_from_file = read_json(file_path)
print(data_from_file)

# ทดสอบการเขียนข้อมูลลงในไฟล์ JSON
print("\nWriting data to new JSON file:")
data_to_write = {
    "name": "Bob",
    "age": 35,
    "city": "Chicago"
}
write_json('output.json', data_to_write)
print("Data written to 'output.json'")

# ทดสอบการใช้งาน json.loads() และ json.dumps()
print("\nTesting JSON string operations:")
test_json_string_operations()
