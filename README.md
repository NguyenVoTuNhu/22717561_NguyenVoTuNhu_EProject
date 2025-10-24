- Đầu tiên sẽ thêm các dữ liệu vào các file .env
- Sau đó tải Docker và thêm RabbitMQ vào Docker bằng câu lệch "docker run -d --hostname rabbitmq --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management"
- Vào địa chỉ http://localhost:15672 để nhập Username: guest, Password: guest
- Thêm file "Dockerfile" vào api-gateway, auth, product, order
- Tạo thêm file "docker-compose.yml" trong thư mục gốc dự án
- Chạy Docker Compose với câu lệch "docker-compose up --build"

![Run Docker](./public/resutls/rundocker.jpg)

#### 1. Đối với Auth
- Tạo tài khoản 
![Tạo tài khoản](./public/resutls/test.jpg)

- Đăng nhập
![Đăng nhập](./public/resutls/logun.jpg)

- Truy cập dashboard

![Dashboard](./public/resutls/checkdashbo.jpg)

#### 2. Đối với Product

- Thêm sản phẩm 

![Thêm sản phẩm](./public/resutls/postproduct.jpg)

- Xem danh sách sản phẩm 

![Xem danh sách](./public/resutls/getpro.jpg)

- Mua sản phẩm

![Mua sản phẩm](./public/resutls/buypro.jpg)

- Xem lại thông tin dựa vào id sản phẩm

![Xem lại thông tin](./public/resutls/xltt.jpg)

- Xem lại đơn hàng dựa vào id đơn hàng

![Xem lại thông tin](./public/resutls/xlttdh.jpg)

#### 3.Kiểm tra bên Docker sau khi thực hiện test trên Postman

- Auth

![Auth](./public/resutls/authdk.jpg)

- Product

![Product](./public/resutls/productdk.jpg)

- Order

![Order](./public/resutls/orderdk.jpg)

#### 4. Github Action và CI/CD

- Github Action

![Github Action](./public/resutls/ga.jpg)

- CI/CD bên Docker Hub

![Docker Hub](./public/resutls/dh.jpg)

