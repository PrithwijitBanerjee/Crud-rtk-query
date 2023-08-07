import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const studentApi = createApi({
    reducerPath: 'students',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_URL}` }),
    tagTypes: ['students'],
    endpoints: builder => ({
        getStudents: builder.query({
            query: () => `/students`,
            providesTags: ['students'],
        }),
        getSingleStudent:builder.query({
            query: id=>`/students/${id}`,
            providesTags:['students'],
        }),
        addStudent: builder.mutation({
            query: studentData => ({
                url: '/students',
                method: 'POST',
                body: studentData,
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }),
            invalidatesTags: ['students'],
        }),
        updateStudent: builder.mutation({
            query: payload => {
                const { id, studentData } = payload;
                return {
                    url: `/students/${id}`,
                    body: studentData,
                    method: 'PUT',
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                }
            },
            invalidatesTags: ['students'],
        }),
        deleteStudent: builder.mutation({
            query: id => ({
                url: `/students/${id}`,
                method: 'DELETE',
                credentials: 'include'
            }),
            invalidatesTags: ['students'],
        })
    })
})


export const { useGetStudentsQuery,useGetSingleStudentQuery, useAddStudentMutation, useUpdateStudentMutation, useDeleteStudentMutation } = studentApi; //Custom hooks automatically generated by RTK Query 2.0
export default studentApi;