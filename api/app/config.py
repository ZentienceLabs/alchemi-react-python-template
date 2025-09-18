from pydantic_settings import BaseSettings
from typing import List
import os

class Settings(BaseSettings):
    debug: bool = True
    host: str = "0.0.0.0"
    port: int = 8000

    # Security
    secret_key: str = "your-secret-key-change-this-in-production"
    algorithm: str = "HS256"
    access_token_expire_minutes: int = 30

    # CORS
    allowed_origins: List[str] = ["http://localhost:3000"]

    # Database
    database_url: str = "sqlite:///./app.db"

    class Config:
        env_file = ".env"

settings = Settings()