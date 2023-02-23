# Build stage
# golang のイメージを使用
FROM golang:1.20 AS builder
WORKDIR /app
COPY . .
RUN go mod download
RUN CGO_ENABLED=0 go build -o main /app/main.go

# Run stage
# Debian の distroless をベースイメージに別のステージを定義
# 最終的なイメージには、distroless/static-debian11 イメージの最小限のライブラリセットとアプリの実行ファイルのみが含まれる
FROM gcr.io/distroless/static-debian11
WORKDIR /app
COPY --from=builder /app/main .
EXPOSE 8080
CMD [ "/app/main" ]
