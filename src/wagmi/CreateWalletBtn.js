import { useCallback, useEffect, useMemo, useState } from 'react'

export default function Gradient({children, style, isAnimationDisabled = false}) {
    const [isAnimating, setIsAnimating] = useState(false)
    const gradientStyle = useMemo(() => {
        const rotate = isAnimating ? '720deg' : '0deg';

        return {
            transform: `rotate(${rotate})`,
            transition: isAnimating ? 'transform 2s cubic-bezier(0.27, 0, 0.24, 0.99' : 'none', ...style,
        };
    }, [isAnimating, style]);

    const handleMouseEnter = useCallback(() => {
        if(isAnimationDisabled || isAnimating) return;
        setIsAnimating(true);
    }, [isAnimationDisabled, isAnimating, setIsAnimating]);

    useEffect(() => {
        if (!isAnimating) return;
        const animationTimeout = setTimeout(() => {
            setIsAnimating(false);
        }, 2000);
        return () => {
            clearTimeout(animationTimeout);
        };
    }, [isAnimating]);

  return (
    <div style={contentWrapperStyle} onMouseEnter={handleMouseEnter}>
        <div className='gradientBackground' style={gradientStyle} />
        {children}
    </div>
  )
}

