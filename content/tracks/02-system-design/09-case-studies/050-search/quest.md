---
slug: "sd-case-search"
title: "Case Study: Product Search"
type: "design"
xp: 60
hints: ["The hardest part is usually not querying, but keeping the index correct."]
rubric: ["States functional and non-functional requirements, with rough numbers", "Includes a high-level diagram or component list showing how requests flow", "Defines the data model (tables or collections, with key fields and indexes)", "Describes the API endpoints or interfaces between components", "Identifies the main bottleneck or risk and how the design handles it", "Names at least two trade-offs or rejected alternatives", "Explains how the search index stays in sync with the primary database"]
minWords: 150
---
# Case Study: Product Search

Your capstone needs **search**: users type into a search box and get relevant results instantly, with typo tolerance ("chiken" → chicken), filters (tags, cooking time, rating) with counts, and autocomplete suggestions.

There are 2M searchable records, 300 searches/second at peak, and changes to records should be searchable within a few seconds.

Decide between Postgres full-text search and a dedicated search engine (Elasticsearch/OpenSearch, Meilisearch, Typesense), and design indexing, querying and keeping search in sync with the database.
