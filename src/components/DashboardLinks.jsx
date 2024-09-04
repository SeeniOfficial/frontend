import React from 'react'
import { LinkItem } from './LinkItem'

export const DashboardLinks = () => {
  return (
    <>
        <div className="flex flex-col gap-6">
          <LinkItem to="/app/profile">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Profile
          </LinkItem>
          <LinkItem to="/app/dashboard">
            <span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z"
                  fill="black"
                  fill-opacity="0.4"
                />
              </svg>
            </span>
            Dashboard
          </LinkItem>
          <LinkItem to="/app/catalog">
            <span>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.625 0.5C7.47726 0.5 7.33097 0.529099 7.19448 0.585636C7.05799 0.642172 6.93397 0.725039 6.8295 0.829505C6.72504 0.933971 6.64217 1.05799 6.58564 1.19448C6.5291 1.33097 6.5 1.47726 6.5 1.625C6.5 1.77274 6.5291 1.91903 6.58564 2.05552C6.64217 2.19201 6.72504 2.31603 6.8295 2.4205C6.93397 2.52496 7.05799 2.60783 7.19448 2.66436C7.33097 2.7209 7.47726 2.75 7.625 2.75H14.375C14.5227 2.75 14.669 2.7209 14.8055 2.66436C14.942 2.60783 15.066 2.52496 15.1705 2.4205C15.275 2.31603 15.3578 2.19201 15.4144 2.05552C15.4709 1.91903 15.5 1.77274 15.5 1.625C15.5 1.47726 15.4709 1.33097 15.4144 1.19448C15.3578 1.05799 15.275 0.933971 15.1705 0.829505C15.066 0.725039 14.942 0.642172 14.8055 0.585636C14.669 0.529099 14.5227 0.5 14.375 0.5H7.625ZM4.625 4.25C4.32663 4.25 4.04048 4.36853 3.8295 4.5795C3.61853 4.79048 3.5 5.07663 3.5 5.375C3.5 5.67337 3.61853 5.95952 3.8295 6.1705C4.04048 6.38147 4.32663 6.5 4.625 6.5H17.375C17.6734 6.5 17.9595 6.38147 18.1705 6.1705C18.3815 5.95952 18.5 5.67337 18.5 5.375C18.5 5.07663 18.3815 4.79048 18.1705 4.5795C17.9595 4.36853 17.6734 4.25 17.375 4.25H4.625ZM2.75 10.25V19.25H19.25V10.25H2.75ZM2 8C1.60218 8 1.22064 8.15804 0.93934 8.43934C0.658035 8.72064 0.5 9.10218 0.5 9.5V20C0.5 20.3978 0.658035 20.7794 0.93934 21.0607C1.22064 21.342 1.60218 21.5 2 21.5H20C20.3978 21.5 20.7794 21.342 21.0607 21.0607C21.342 20.7794 21.5 20.3978 21.5 20V9.5C21.5 9.10218 21.342 8.72064 21.0607 8.43934C20.7794 8.15804 20.3978 8 20 8H2ZM14.42 13.745C14.5305 13.642 14.6192 13.5178 14.6807 13.3798C14.7422 13.2418 14.7752 13.0928 14.7779 12.9418C14.7806 12.7907 14.7528 12.6407 14.6962 12.5006C14.6396 12.3605 14.5554 12.2333 14.4486 12.1264C14.3417 12.0196 14.2145 11.9354 14.0744 11.8788C13.9343 11.8222 13.7843 11.7944 13.6332 11.7971C13.4822 11.7998 13.3332 11.8328 13.1952 11.8943C13.0572 11.9558 12.933 12.0445 12.83 12.155L9.875 15.11L9.17 14.405C9.06701 14.2945 8.94281 14.2058 8.80481 14.1443C8.66681 14.0828 8.51784 14.0498 8.36678 14.0471C8.21573 14.0444 8.06569 14.0722 7.9256 14.1288C7.78552 14.1854 7.65827 14.2696 7.55144 14.3764C7.44461 14.4833 7.3604 14.6105 7.30382 14.7506C7.24723 14.8907 7.21945 15.0407 7.22211 15.1918C7.22478 15.3428 7.25784 15.4918 7.31933 15.6298C7.38082 15.7678 7.46947 15.892 7.58 15.995L9.08 17.495C9.29094 17.7057 9.57687 17.824 9.875 17.824C10.1731 17.824 10.4591 17.7057 10.67 17.495L14.42 13.745Z"
                  fill="black"
                  fill-opacity="0.4"
                />
              </svg>
            </span>
            Catalog
          </LinkItem>
          <LinkItem to="/app/messages">
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.45996 2.332C8.73996 0.913 10.746 0 13 0C16.866 0 20 2.686 20 6C20 7.989 18.87 9.752 17.132 10.844L17 10.92V14.97C17 15.1691 16.9405 15.3637 16.8292 15.5288C16.718 15.6939 16.56 15.822 16.3754 15.8968C16.1909 15.9715 15.9883 15.9895 15.7935 15.9484C15.5986 15.9073 15.4205 15.809 15.282 15.666L14.142 14.492C15.211 13.228 15.84 11.676 15.84 9.999C15.84 5.932 12.142 2.604 7.45996 2.332Z"
                  fill="black"
                  fill-opacity="0.4"
                />
                <path
                  d="M8.385 15.886L4.718 19.666C4.57942 19.809 4.40132 19.9073 4.20651 19.9484C4.0117 19.9895 3.80905 19.9715 3.62452 19.8968C3.43999 19.822 3.28197 19.6939 3.17071 19.5288C3.05945 19.3637 3.00001 19.1691 3 18.97V14.92L2.868 14.844C1.129 13.752 0 11.989 0 10C0 6.686 3.134 4 7 4C10.866 4 14 6.686 14 10C14 12.726 11.879 15.028 8.974 15.758C8.77934 15.8081 8.58287 15.8507 8.385 15.886Z"
                  fill="black"
                  fill-opacity="0.4"
                />
              </svg>
            </span>
            Messages
          </LinkItem>
        </div>
        <div className="mt-8">
          <h3 className="text-sm font-semibold mb-4">Other links</h3>
          <div className="flex flex-col gap-6">
            <LinkItem to="/app/settings">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5002 10C17.5002 9.77 17.4902 9.55 17.4702 9.32L19.3302 7.91C19.7302 7.61 19.8402 7.05 19.5902 6.61L17.7202 3.38C17.6002 3.16818 17.4063 3.00814 17.1756 2.93062C16.9449 2.8531 16.6936 2.86356 16.4702 2.96L14.3202 3.87C13.9502 3.61 13.5602 3.38 13.1502 3.19L12.8602 0.88C12.8002 0.38 12.3702 0 11.8702 0H8.14015C7.63015 0 7.20015 0.38 7.14015 0.88L6.85015 3.19C6.44015 3.38 6.05015 3.61 5.68015 3.87L3.53015 2.96C3.07015 2.76 2.53015 2.94 2.28015 3.38L0.410153 6.62C0.160153 7.06 0.270153 7.61 0.670153 7.92L2.53015 9.33C2.48845 9.77903 2.48845 10.231 2.53015 10.68L0.670153 12.09C0.270153 12.39 0.160153 12.95 0.410153 13.39L2.28015 16.62C2.53015 17.06 3.07015 17.24 3.53015 17.04L5.68015 16.13C6.05015 16.39 6.44015 16.62 6.85015 16.81L7.14015 19.12C7.20015 19.62 7.63015 20 8.13015 20H11.8602C12.3602 20 12.7902 19.62 12.8502 19.12L13.1402 16.81C13.5502 16.62 13.9402 16.39 14.3102 16.13L16.4602 17.04C16.9202 17.24 17.4602 17.06 17.7102 16.62L19.5802 13.39C19.8302 12.95 19.7202 12.4 19.3202 12.09L17.4602 10.68C17.4902 10.45 17.5002 10.23 17.5002 10ZM10.0402 13.5C8.11015 13.5 6.54015 11.93 6.54015 10C6.54015 8.07 8.11015 6.5 10.0402 6.5C11.9702 6.5 13.5402 8.07 13.5402 10C13.5402 11.93 11.9702 13.5 10.0402 13.5Z"
                    fill="black"
                    fill-opacity="0.4"
                  />
                </svg>
              </span>
              Settings
            </LinkItem>
            <LinkItem to="/app/help">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 17H9V15H11V17ZM13.07 9.25L12.17 10.17C11.67 10.68 11.31 11.14 11.13 11.86C11.05 12.18 11 12.54 11 13H9V12.5C8.99959 11.9746 9.1027 11.4542 9.30345 10.9686C9.50421 10.483 9.79866 10.0418 10.17 9.67L11.41 8.41C11.87 7.97 12.09 7.31 11.96 6.61C11.8907 6.25212 11.7244 5.92017 11.4792 5.65036C11.2341 5.38055 10.9196 5.18325 10.57 5.08C9.46 4.77 8.43 5.4 8.1 6.35C7.98 6.72 7.67 7 7.28 7H6.98C6.4 7 6 6.44 6.16 5.88C6.37469 5.15059 6.79234 4.49725 7.36424 3.99618C7.93613 3.49511 8.6387 3.16696 9.39 3.05C10.91 2.81 12.36 3.6 13.26 4.85C14.44 6.48 14.09 8.23 13.07 9.25Z"
                    fill="black"
                    fill-opacity="0.4"
                  />
                </svg>
              </span>
              Help
            </LinkItem>
            <LinkItem to="/logout">
              <span>
                <svg
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9M2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z"
                    fill="black"
                    fill-opacity="0.4"
                  />
                </svg>
              </span>
              Log out
            </LinkItem>
          </div>
        </div>
    </>
  )
}
