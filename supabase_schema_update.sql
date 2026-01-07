-- Add new columns for dynamic templates
alter table public.content_pages 
add column type text default 'page' check (type in ('page', 'template')),
add column dynamic_slug text;

-- Create index for faster lookups
create index idx_content_pages_dynamic_slug on public.content_pages(dynamic_slug);
