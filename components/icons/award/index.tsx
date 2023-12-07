import React from 'react'

interface IndexProps {
    fill?: string
    filled?: string
    size?: number
    height?: number
    width?: number
    label?: string
}

export const IconAward = ({
    fill = '#000000',
    filled,
    size,
    height,
    width,
    label,
    ...props
}: IndexProps) => {
    return (
        <svg
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            fill={filled ? fill : 'none'}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M4.25977 11.0199V15.9899C4.25977 17.8099 4.25977 17.8099 5.97977 18.9699L10.7098 21.6999C11.4198 22.1099 12.5798 22.1099 13.2898 21.6999L18.0198 18.9699C19.7398 17.8099 19.7398 17.8099 19.7398 15.9899V11.0199C19.7398 9.19994 19.7398 9.19994 18.0198 8.03994L13.2898 5.30994C12.5798 4.89994 11.4198 4.89994 10.7098 5.30994L5.97977 8.03994C4.25977 9.19994 4.25977 9.19994 4.25977 11.0199Z"
                stroke={fill}
                strokeWidth={1.5}
                strokeLinecap='round'
                strokeLinejoin='round' />
            <path
                d="M17.5 7.63V5C17.5 3 16.5 2 14.5 2H9.5C7.5 2 6.5 3 6.5 5V7.56"
                stroke={fill}
                strokeWidth={1.5}
                strokeLinecap='round'
                strokeLinejoin='round' />
            <path
                d="M12.6298 10.99L13.1998 11.88C13.2898 12.02 13.4898 12.16 13.6398 12.2L14.6598 12.46C15.2898 12.62 15.4598 13.16 15.0498 13.66L14.3798 14.47C14.2798 14.6 14.1998 14.83 14.2098 14.99L14.2698 16.04C14.3098 16.69 13.8498 17.02 13.2498 16.78L12.2698 16.39C12.1198 16.33 11.8698 16.33 11.7198 16.39L10.7398 16.78C10.1398 17.02 9.67978 16.68 9.71978 16.04L9.77978 14.99C9.78978 14.83 9.70978 14.59 9.60978 14.47L8.93978 13.66C8.52978 13.16 8.69978 12.62 9.32978 12.46L10.3498 12.2C10.5098 12.16 10.7098 12.01 10.7898 11.88L11.3598 10.99C11.7198 10.45 12.2798 10.45 12.6298 10.99Z"
                stroke={fill}
                strokeWidth={1.5}
                strokeLinecap='round'
                strokeLinejoin='round' />
        </svg>
    )
}
