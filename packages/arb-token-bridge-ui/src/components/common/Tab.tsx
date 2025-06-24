import { Tab } from '@headlessui/react'
import { forwardRef, PropsWithChildren } from 'react'

export type TabButtonProps = PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>

export const TabButton = forwardRef<HTMLButtonElement, TabButtonProps>(
  (props, ref) => {
    const tabButtonClassName =
      'text-black px-3 mr-2 pb-1 ui-selected:border-b-4 ui-selected:border-[#AF6E5D] ui-not-selected:text-black/80 arb-hover'

    return (
      <Tab
        ref={ref}
        className={`${tabButtonClassName} ${props.className ?? ''}`}
        {...props}
      >
        {props.children}
      </Tab>
    )
  }
)

TabButton.displayName = 'TabButton'
