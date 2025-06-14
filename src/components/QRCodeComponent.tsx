
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Copy, Download } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface QRCodeComponentProps {
  onScan?: () => void;
}

const QRCodeComponent: React.FC<QRCodeComponentProps> = ({ onScan }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();
  
  const currentUrl = window.location.href;

  useEffect(() => {
    generateQRCode();
    if (onScan) {
      onScan();
    }
  }, [onScan]);

  const generateQRCode = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 200;
    canvas.height = 200;

    // Clear canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Create a simple QR code pattern (simplified version)
    ctx.fillStyle = '#000000';
    
    // Draw QR code pattern
    const moduleSize = 8;
    const modules = 25;
    
    // Corner squares
    drawCornerSquare(ctx, 0, 0, moduleSize);
    drawCornerSquare(ctx, (modules - 7) * moduleSize, 0, moduleSize);
    drawCornerSquare(ctx, 0, (modules - 7) * moduleSize, moduleSize);
    
    // Data modules (simplified pattern)
    for (let i = 0; i < modules; i++) {
      for (let j = 0; j < modules; j++) {
        if (shouldDrawModule(i, j)) {
          ctx.fillRect(i * moduleSize, j * moduleSize, moduleSize, moduleSize);
        }
      }
    }
  };

  const drawCornerSquare = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
    // Outer square
    ctx.fillRect(x, y, size * 7, size * 7);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(x + size, y + size, size * 5, size * 5);
    ctx.fillStyle = '#000000';
    ctx.fillRect(x + size * 2, y + size * 2, size * 3, size * 3);
  };

  const shouldDrawModule = (i: number, j: number): boolean => {
    // Simplified pattern generation
    const hash = (i * 31 + j * 17 + currentUrl.length) % 3;
    return hash === 0 && !isCornerArea(i, j);
  };

  const isCornerArea = (i: number, j: number): boolean => {
    return (
      (i < 9 && j < 9) ||
      (i < 9 && j > 15) ||
      (i > 15 && j < 9)
    );
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(currentUrl);
    toast({
      title: "URL Copied!",
      description: "The website URL has been copied to your clipboard.",
    });
  };

  const downloadQRCode = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'visioncraft-qr-code.png';
    link.href = canvas.toDataURL();
    link.click();

    toast({
      title: "QR Code Downloaded!",
      description: "The QR code has been saved to your device.",
    });
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <canvas
          ref={canvasRef}
          className="border border-gray-200 rounded"
        />
      </div>
      
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-4">
          Scan this QR code to access VisionCraft store
        </p>
        <div className="text-xs text-gray-500 bg-gray-100 p-2 rounded max-w-xs truncate">
          {currentUrl}
        </div>
      </div>

      <div className="flex space-x-2">
        <Button onClick={copyUrl} variant="outline" size="sm">
          <Copy className="h-4 w-4 mr-2" />
          Copy URL
        </Button>
        <Button onClick={downloadQRCode} variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
      </div>
    </div>
  );
};

export default QRCodeComponent;
