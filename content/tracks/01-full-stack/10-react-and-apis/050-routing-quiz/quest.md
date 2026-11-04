---
slug: react-api-routing
title: Client-Side Routing
type: quiz
xp: 15
questions:
  - prompt: "What does a client-side router like React Router do?"
    options: ["Reloads the page for every link", "Maps the URL to components and updates the page without a full reload", "Routes HTTP requests on the server"]
    answer: 1
  - prompt: "Given `<Route path=\"/recipes/:id\" element={<Recipe />} />`, how does Recipe read the id?"
    options: ["props.id", "useParams().id", "window.id"]
    answer: 1
  - prompt: "Why use `<Link to=\"/recipes\">` instead of `<a href=\"/recipes\">`?"
    options: ["Link navigates without reloading the page, keeping app state", "<a> tags are deprecated", "Link is required for SEO"]
    answer: 0
  - prompt: "A user refreshes the page on /recipes/5 of your deployed app and gets a 404. Why?"
    options: ["React Router is broken", "The server has no file at /recipes/5 — configure it to serve index.html for unknown paths (SPA fallback)", "The recipe was deleted"]
    answer: 1
  - prompt: "Where should filter state like `?tag=vegan&page=2` live so it survives refreshes and can be shared?"
    options: ["In useState only", "In the URL search params (useSearchParams)", "In a cookie"]
    answer: 1
resources: [{"title": "React Router docs", "url": "https://reactrouter.com"}]
---
# Client-Side Routing

Single-page apps (SPAs) load one HTML page, and JavaScript swaps views as the URL changes.

```tsx
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate } from 'react-router';

<BrowserRouter>
  <nav><Link to="/">Home</Link> <Link to="/recipes">Recipes</Link></nav>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/recipes" element={<RecipeList />} />
    <Route path="/recipes/:id" element={<RecipeDetail />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>

function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  // ... after deleting: navigate('/recipes')
}
```

### The URL is state

Put things the user would want to bookmark or share **in the URL**: the current page, filters, search terms, the selected tab. `useSearchParams()` reads and writes `?key=value` just like `useState`.

### Protected routes

Wrap pages that require login in a component that redirects to `/login` when there's no user. This is a UX convenience. **The API must still enforce authentication.**
