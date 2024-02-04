// saya memiliki tabel anak dengan kolom id, name, dan parent_id
// dan saya juga memiliki tabel parent dengan kolom id dan parent_name

buatkan query sql untuk tabel murid yang mengambil parent_name dari table parent dengan menggunakan parent_id

SELECT ta.id, ta.name, tp.parent_name
FROM table_anak AS ta
JOIN table_parent AS tp ON ta.parent_id = tp.id
WHERE ta.id IN (1,2,3,4)
