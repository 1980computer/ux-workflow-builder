import { User, Settings, LogOut, Moon, Sun, Search, X } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { useState, useEffect } from 'react'
import { useAutopilot } from './AutopilotContext'

interface HeaderAction {
  icon: string;
  alt: string;
  onClick?: () => void;
}

interface TenantOption {
  value: string;
  label: string;
}

interface UserMenuItem {
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}

interface GlobalHeaderProps {
  branding?: {
    logo?: string;
    title: string;
    logoSize?: { width: number; height: number };
  };
  actions?: HeaderAction[];
  tenant?: {
    placeholder: string;
    options: TenantOption[];
    onSelect?: (value: string) => void;
  };
  user?: {
    avatar: string;
    menuItems: UserMenuItem[];
  };
  showThemeToggle?: boolean;
  onAutopilotToggle?: (isOpen: boolean) => void;
  isAutopilotOpen?: boolean;
  className?: string;
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({
  branding = {
    logo: '/assets/icon-waffle.svg',
    title: 'Workflow',
    logoSize: { width: 16, height: 16 }
  },
  actions = [
    { icon: '/assets/icon-search.svg', alt: 'Search' },
    { icon: '/assets/icon-autopilot.svg', alt: 'Autopilot' },
    { icon: '/assets/icon-notification.svg', alt: 'Notification' },
    { icon: '/assets/icon-help.svg', alt: 'Help' }
  ],
  tenant,
  user = {
    avatar: 'UI',
    menuItems: [
      { icon: <User className="mr-2 h-4 w-4" />, label: 'Profile', onClick: () => {} },
      { icon: <Settings className="mr-2 h-4 w-4" />, label: 'Settings', onClick: () => {} },
      { icon: <LogOut className="mr-2 h-4 w-4" />, label: 'Logout', onClick: () => {} }
    ]
  },
  showThemeToggle = true,
  onAutopilotToggle,
  isAutopilotOpen = false,
  className = ''
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeView, setActiveView] = useState('Node')
  const [selectedWorkspace, setSelectedWorkspace] = useState('Workflow')

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme')
    
    if (savedTheme === 'light') {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    } else {
      // Always default to dark mode
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
      if (!savedTheme) {
        localStorage.setItem('theme', 'dark')
      }
    }
  }, [])

  // Apply dark mode immediately on mount
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const handleSearchClick = () => {
    setIsSearchOpen(true)
  }

  const handleSearchClose = () => {
    setIsSearchOpen(false)
    setSearchQuery('')
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Here you would implement actual search functionality
    }
  }

  const { openAutopilot } = useAutopilot()
  
  const handleAutopilotClick = () => {
    openAutopilot()
  }
  return (
    <header className={`h-12 min-h-12 max-h-12 bg-white dark:bg-dark-grey border-b border-gray-200 dark:border-dark-grey flex items-center px-4 flex-shrink-0 ${className}`}>
      {/* Left Section - Workspace Dropdown */}
      <div className="flex items-center gap-3 justify-start">
        {branding.logo && (
          <Sheet>
            <SheetTrigger asChild>
              <img 
                src={branding.logo} 
                alt="Logo" 
                style={{ 
                  height: branding.logoSize?.height || 16, 
                  width: branding.logoSize?.width || 16 
                }} 
                className="mr-3 cursor-pointer" 
                onError={(_e) => {}} 
              />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <div className="flex flex-col space-y-1 pt-2">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start h-10 text-sm font-normal hover:bg-gray-100 dark:hover:bg-dark-grey"
                  style={{ height: '40px', fontSize: '14px' }}
                >
                  Button
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start h-10 text-sm font-normal hover:bg-gray-100 dark:hover:bg-dark-grey"
                  style={{ height: '40px', fontSize: '14px' }}
                >
                  Button
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start h-10 text-sm font-normal hover:bg-gray-100 dark:hover:bg-dark-grey"
                  style={{ height: '40px', fontSize: '14px' }}
                >
                  Button
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start h-10 text-sm font-normal hover:bg-gray-100 dark:hover:bg-dark-grey"
                  style={{ height: '40px', fontSize: '14px' }}
                >
                  Button
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start h-10 text-sm font-normal hover:bg-gray-100 dark:hover:bg-dark-grey"
                  style={{ height: '40px', fontSize: '14px' }}
                >
                  Button
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        )}
        
        {/* Workspace Dropdown */}
        <Select value={selectedWorkspace} onValueChange={setSelectedWorkspace}>
          <SelectTrigger className="select-trigger-custom w-[160px] h-8 text-sm font-semibold border-0 focus:ring-0 focus:outline-none bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 [&>svg]:order-first [&>svg]:mr-0 [&>svg]:ml-0 [&>span]:ml-0">
            <SelectValue placeholder="Workflow" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Workflow">Workflow</SelectItem>
            <SelectItem value="Workflow 2">Workflow 2</SelectItem>
            <SelectItem value="Workflow 3">Workflow 3</SelectItem>
            <SelectItem value="Workflow 4">Workflow 4</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Center Section - Navigation Buttons */}
      <div className="flex-1 flex justify-center items-center gap-1">
        <Button
          variant={activeView === 'Node' ? 'default' : 'ghost'}
          size="sm"
          className={`h-8 px-3 text-sm font-medium ${
            activeView === 'Node' 
              ? 'bg-gray-200 dark:bg-dark-grey-light text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600' 
              : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
          }`}
          onClick={() => setActiveView('Node')}
        >
          Node
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-3 text-sm font-medium text-gray-400 dark:text-gray-500 cursor-not-allowed"
          disabled
        >
          Form
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 px-3 text-sm font-medium text-gray-400 dark:text-gray-500 cursor-not-allowed"
          disabled
        >
          Integrations
        </Button>
      </div>
      
      {/* Right Section - Action Icons */}
      <div className="flex items-center gap-[20px]">
        {/* Action Icons */}
        {actions.map((action, index) => {
              // Check if this is search, help, notification, or autopilot icon for special handling
              const isSearchIcon = action.alt.toLowerCase().includes('search')
              const isHelpIcon = action.alt.toLowerCase().includes('help')
              const isNotificationIcon = action.alt.toLowerCase().includes('notification')
              const isAutopilotIcon = action.alt.toLowerCase().includes('autopilot')
          
              if (isSearchIcon) {
                if (isSearchOpen) {
                  return (
                    <div key={index} className="flex items-center gap-3" style={{ maxWidth: '300px' }}>
                      <Search className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      <form onSubmit={handleSearchSubmit} className="flex-1">
                        <Input
                          type="text"
                          placeholder="Search..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="border-0 focus:ring-0 focus:outline-none text-sm h-[34px]"
                          style={{ height: '34px' }}
                          autoFocus
                        />
                      </form>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleSearchClose}
                        className="h-[34px] w-[34px] p-0"
                        style={{ height: '34px', width: '34px' }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )
                } else {
                  return (
                    <img 
                      key={index}
                      src={action.icon} 
                      alt={action.alt} 
                      style={{ height: 20, width: 20 }} 
                      className="cursor-pointer"
                      onClick={handleSearchClick}
                      onError={(_e) => {}} 
                    />
                  )
                }
              }
          
              if (isHelpIcon) {
                return (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <img 
                        src={action.icon} 
                        alt={action.alt} 
                        style={{ height: 20, width: 20 }} 
                        className="cursor-pointer"
                        onError={(_e) => {}} 
                      />
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Help Center</h4>
                      </div>
                    </PopoverContent>
                  </Popover>
                )
          }
          
              if (isNotificationIcon) {
                return (
                  <Popover key={index}>
                    <PopoverTrigger asChild>
                      <div className="cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-gray-700 dark:text-white" viewBox="0 0 16 16">
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
                        </svg>
                      </div>
                    </PopoverTrigger>
                    <PopoverContent className="w-80 p-4">
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm">Notifications</h4>
                      </div>
                    </PopoverContent>
                  </Popover>
                )
              }
              
              if (isAutopilotIcon) {
                return (
                  <img 
                    key={index}
                    src={action.icon} 
                    alt={action.alt} 
                    style={{ height: 20, width: 20 }} 
                    className="cursor-pointer"
                    onClick={handleAutopilotClick}
                    onError={(_e) => {}} 
                  />
                )
              }
              
              // Default rendering for other icons
              return (
                <img 
                  key={index}
                  src={action.icon} 
                  alt={action.alt} 
                  style={{ height: 20, width: 20 }} 
                  onClick={action.onClick}
                  className={action.onClick ? 'cursor-pointer' : ''}
                  onError={(_e) => {}} 
                />
              )
        })}
        
        {/* Tenant Dropdown */}
        {tenant && (
          <Select onValueChange={tenant.onSelect}>
            <SelectTrigger className="w-[140px] h-8 text-sm border-0 focus:ring-0 focus:outline-none">
              <SelectValue placeholder={tenant.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {tenant.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {/* User Menu */}
        {user && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="cursor-pointer">
                {user.avatar.startsWith('data:') ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-gray-700 dark:text-white" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                  </svg>
                ) : (
                  <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{user.avatar}</span>
                )}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {user.menuItems.map((item, index) => (
                <DropdownMenuItem key={index} onClick={item.onClick}>
                  {item.icon}
                  <span>{item.label}</span>
                </DropdownMenuItem>
              ))}
              {showThemeToggle && (
                <DropdownMenuItem onClick={toggleTheme}>
                  {isDarkMode ? (
                    <>
                      <Sun className="mr-2 h-4 w-4" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="mr-2 h-4 w-4" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
          </div>
        </header>
      )
  }

  export default GlobalHeader