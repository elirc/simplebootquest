SELECT a.name FROM authors a JOIN books b ON b.author_id = a.id WHERE b.genre = 'sci-fi' ORDER BY a.name;
