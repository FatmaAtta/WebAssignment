from django.shortcuts import render, redirect
from .models import Book, Category
from .forms import BookForm
from django.contrib import messages
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

def main(request):
    return render(request,'main.html')

def second_main(request):
    active_tab = 'second_main'
    recommended = Book.objects.all()[:7]
    best = Book.objects.all()[:5]
    return render(request, 'second_main.html', {'active_tab': active_tab, 'recommended':recommended, 'best': best})

def available_books(request):
    letter = request.user.username[0].upper()
    active_tab = 'available'
    books = Book.objects.all()
    return render(request, 'availableBooks.html', {'books':books, 'active_tab': active_tab, 'letter':letter})

def borrowed_books(request):
    letter = request.user.username[0].upper() if request.user.username[0] else ' '
    active_tab = 'borrowed'
    #filter returns multiple while get returns one
    books = Book.objects.filter(borrowed_by=request.user)
    return render(request, 'borrowed.html', {'active_tab': active_tab, 'letter':letter, 'books': books})

def borrow(request, book_id):
    id = book_id
    book = Book.objects.get(book_id=id)
    book.borrowed_by=request.user
    book.is_available=False
    book.save()
    return render(request, 'availableBooks.html')

def return_book(request, book_id):
    id = book_id
    book = Book.objects.get(book_id=id)
    book.borrowed_by=None
    book.is_available=True
    book.save()
    return render(request, 'borrowed.html')

def book_details(request,book_id):
    id=book_id
    book=Book.objects.get(book_id=id)
    letter = request.user.username[0].upper()
    return render(request, 'book_details.html', {'book':book, 'letter':letter})

def edit_details(request, book_id):
    id = book_id
    book = Book.objects.get(book_id=id)
    letter = request.user.username[0].upper()
    return render(request, 'admin_details.html', {'book': book, 'letter':letter})

@csrf_exempt
def update(request):
    if request.method=='POST':
        data=json.loads(request.body)
        id = data.get('book_id')
        title = data.get('title')
        author = data.get('author')
        category = data.get('category')
        desc = data.get('desc')
        try:
            book=Book.objects.get(book_id=id)
            book.name = title
            book.author = author
            category, created = Category.objects.get_or_create(name=category)
            book.category = category
            book.description = desc
            book.save()
            return JsonResponse({'success':True})
        except Book.DoesNotExist:
            return JsonResponse({'success':False, 'error': 'Book not found...'})
    return JsonResponse({'success': False, 'error': 'Invalid request method'})

@csrf_exempt        
def delete(request):
    if request.method=='POST':
        data = json.loads(request.body)
        print(data)
        id = data.get('book_id')
        print(id)
        try:
            book=Book.objects.get(book_id=id)
            book.delete()
            return JsonResponse({'success': True})
        except Book.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Book not found'})
    return JsonResponse({'success': False, 'error': 'Invalid request method'})

def add_book(request):
    active_tab = 'add_book'
    if request.method=="POST":
        form=BookForm(request.POST, request.FILES) #must add request.FILES when your form contains image input
        if form.is_valid():
            form.save()
            messages.success(request, "Book added successfully!", extra_tags= 'book_added')
            form = BookForm() #to clear the form fields
            return redirect('add_book')
        else:
            print(form.errors)
    else:
        form = BookForm()
        letter = request.user.username[0].upper() if request.user.username else ' '
    return render(request, 'add_book.html', {'form': form, 'active_tab': active_tab, 'letter':letter})

# def edit_details(request):
#     return render(request, 'admin_details.html')

def admin_page(request):
    active_tab = 'admin_page'
    letter = request.user.username[0].upper()
    books = Book.objects.all()
    return render(request, 'admin.html', {'books':books, 'active_tab':active_tab, 'letter':letter})

def scifi(request):
    
    pass

def fantasy(request):
    pass

def horror(request):
    pass

def romance(request):
    pass

def history(request):
    pass

def adventure(request):
    pass

def thriller(request):
    pass
