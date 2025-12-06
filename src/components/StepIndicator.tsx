'use client';

interface StepIndicatorProps {
  currentStep: number;
  steps: Array<{ label: string; description?: string }>;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, steps }) => {
  return (
    <div className="mb-8">
      <nav className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4">
        {steps.map((step, index) => (
          <div key={index} className="flex-1">
            <div
              className={`py-3 px-4 rounded-lg text-center transition-colors duration-200 ${
                currentStep === index + 1
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200'
              }`}
            >
              <div className="font-medium">{step.label}</div>
              {step.description && (
                <div className="text-xs mt-1 opacity-90">
                  {step.description}
                </div>
              )}
            </div>
          </div>
        ))}
      </nav>
      <div className="hidden sm:flex items-center justify-between mt-2 px-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-full ${index < steps.length - 1 ? 'mr-2' : ''} ${
              currentStep > index + 1 ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default StepIndicator;