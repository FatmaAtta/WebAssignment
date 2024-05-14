from django.forms import ModelForm
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import User, Book
# from django.contrib.auth.models import User

class BookForm(ModelForm):
    class Meta:
        model = Book
        fields = ['name','author','description','cover_page','category']




# class RegistrationForm(UserCreationForm):
#     is_admin = forms.BooleanField(required=False)
#     class Meta:
#         model = User
#         fields = ['username', 'email', 'password', 'is_admin']
#     def clean_password1(self):
#         cleaned_data=super().clean()
#         password1 = cleaned_data.get('password1')
#         if len(password1)<8:
#             raise forms.ValidationError("Password must be atleast 8 characters long")
#         if not any(char.isdigit() for char in password1) or not any(char.isalpha() for char in password1):
#             raise forms.ValidationError("Password must contain letters and numbers")
#         if not all(char.isalnum() or char == '_' for char in password1):
#             raise forms.ValidationError("Password can only contain letters, numbers and underscores")
#         return password1
    
#     def clean_password2(self):
#         password = self.cleaned_data.get('password1')
#         confirm_password = self.cleaned_data.get('password2')
#         if password!=confirm_password:
#             raise forms.ValidationError("Passwords are not matching!")
#         return confirm_password
    
#     def clean_email(self):
#         cleaned_data = super().clean()
#         email=cleaned_data.get('email')
#         if User.objects.filter(email=email).exists():
#             raise forms.ValidationError("This email already exists!")
#         return email
    
#     def clean_username(self):
#         cleaned_data = super().clean()
#         username=cleaned_data.get('username')
#         if User.objects.filter(username=username).exists():
#             raise forms.ValidationError("This username is taken!")
#         return username
