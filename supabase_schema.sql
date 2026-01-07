-- Create the content_pages table
create table public.content_pages (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null,
  slug text not null unique,
  service text,
  industry text,
  location text,
  title text not null,
  intro text,
  content text, -- Rich text / Markdown
  faq jsonb, -- Array of {question, answer}
  keywords text,
  meta_title text,
  meta_description text,
  canonical_url text,
  featured_image text,
  og_image text,
  schema jsonb, -- JSON-LD
  status text default 'draft' check (status in ('draft', 'published')),
  author_id uuid references auth.users(id)
);

-- Enable Row Level Security
alter table public.content_pages enable row level security;

-- Create policies
-- Allow read access to everyone for published pages
create policy "Enable read access for all users"
on public.content_pages
for select
using (true);

-- Allow all access to authenticated users (admins)
create policy "Enable all access for authenticated users"
on public.content_pages
for all
to authenticated
using (true)
with check (true);

-- Create storage bucket for images if it doesn't exist
insert into storage.buckets (id, name, public)
values ('images', 'images', true)
on conflict (id) do nothing;

-- Storage policies
create policy "Give public access to images"
on storage.objects for select
using ( bucket_id = 'images' );

create policy "Enable upload for authenticated users"
on storage.objects for insert
to authenticated
with check ( bucket_id = 'images' );

create policy "Enable update for authenticated users"
on storage.objects for update
to authenticated
using ( bucket_id = 'images' );

create policy "Enable delete for authenticated users"
on storage.objects for delete
to authenticated
using ( bucket_id = 'images' );
