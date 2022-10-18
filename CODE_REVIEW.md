Code smells=>

1.In "libs/books/feature/src/lib/book-search/book-search.component.ts" file
  inside ngOnInit() we are subscribing to getAllBooks but we aren't implementing the ngOnDestroy()
  in order to unsubscribe from that which might lead to memory leaks


Improvements=>

1.Adding a cross button to search bar for clearing the text
2.Adding a button 'Add to Favourite'
3.Adding contact us page
