from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from . import views
urlpatterns = [
    path('',views.main, name="main"),
    path('second_main/',views.second_main, name="second_main"),
    path('available_books/',views.available_books, name="available_books"),
    path('borrowed_books/',views.borrowed_books, name="borrowed_books"),
    path('borrow/<int:book_id>',views.borrow, name="borrow"),
    path('return_book/<int:book_id>',views.return_book, name="return_book"),
    path('book_details/<int:book_id>',views.book_details, name="book_details"),
    path('edit_details/<int:book_id>',views.edit_details, name="edit_details"),
    path('update/',views.update, name="update"),
    path('delete/',views.delete, name="delete"),
    path('add_book/',views.add_book, name="add_book"),
    path('admin_page/',views.admin_page, name="admin_page"),
    path('available_books/Sci-Fi/',views.scifi, name="horror"),
    path('available_books/Fantasy/',views.fantasy, name="horror"),
    path('available_books/Horror/',views.horror, name="horror"),
    path('available_books/Romance/',views.romance, name="horror"),
    path('available_books/History/',views.history, name="horror"),
    path('available_books/Adventure/',views.adventure, name="horror"),
    path('available_books/Thriller/',views.thriller, name="horror"),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)