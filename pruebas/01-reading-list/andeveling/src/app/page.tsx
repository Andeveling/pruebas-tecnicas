"use client"
import { useBooks } from "@/lib/hooks/useBooks"
import { useState } from "react"

export default function Home() {
  const [filter, setFilter] = useState("")
  const [maxPagesRange, setMaxPagesRange] = useState(2000)
  const { books, genres, isLoading } = useBooks({ filter, maxPagesRange })

  const handlePagesRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPagesRange(Number(e.target.value))
  }

  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value)
  }

  return (
    <main className='flex container min-h-screen flex-col items-center justify-start p-24 space-y-8 mx-auto'>
      <h1 className='text-3xl font-bold'>Libros disponibles {books.length}</h1>
      <form className='grid w-full grid-cols-2 items-center'>
        <div className='form-control'>
          <label className='label' htmlFor='genre'>
            <span className='label-text'>Pick the genre</span>
          </label>
          <select className='select select-bordered w-full max-w-xs' name='genre' onChange={handleFilter} id='genre'>
            <option value=''>all</option>
            {genres.map((genre) => {
              return (
                <option key={genre} value={genre}>
                  {genre}
                </option>
              )
            })}
          </select>
        </div>
        <div className='form-control'>
          <label className='label' htmlFor='range'>
            <span className='label-text'>Select Range of pages </span>
            <span className='label-text-alt'>min: {maxPagesRange}</span>
          </label>
          <input
            id='range'
            name='range'
            type='range'
            min='0'
            max='2000'
            value={maxPagesRange}
            className='range'
            step={10}
            onChange={handlePagesRange}
          />
          <div className='w-full flex justify-between text-xs px-2'>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
        </div>
      </form>

      {isLoading && <span className='loading loading-dots loading-lg'></span>}
      {books.length === 0 ? (
        <p className='text-3xl font-bold mt-32'>
          <strong>No hay libros</strong>
        </p>
      ) : (
        <ul className='w-full grid gap-4 grid-cols-4'>
          {books.map((book, index) => {
            return (
              <li key={book.title} className='col-span-1 card image-full border'>
                <figure className='max-h-[500px]'>
                  <img src={book.cover} alt={book.title} />
                </figure>
                <div className='card-body'>
                  <h2 className='card-title '>{book.title}</h2>
                  <p>{book.synopsis}</p>
                  <div className='card-actions justify-end'>
                    <div className='badge badge-warning badge-sm'>{book.genre}</div>
                    <div className='badge badge-secondary badge-sm'>{book.year}</div>
                    <div className='badge badge-info badge-sm'>{book.pages} pages</div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </main>
  )
}
