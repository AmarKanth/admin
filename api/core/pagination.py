from rest_framework.pagination import PageNumberPagination
from rest_framework.response import Response

DEFAULT_PAGE = 1
DEFAULT_PAGE_SIZE = 6


class CustomPagination(PageNumberPagination):
    page = DEFAULT_PAGE
    page_size = DEFAULT_PAGE_SIZE

    def get_paginated_response(self, data):
        return Response({
            'data': data,
            'meta': {
                'last_page': self.page.paginator.num_pages,
                'page': int(self.request.GET.get('page', DEFAULT_PAGE)),
                'total_count': self.page.paginator.count
            }
        })